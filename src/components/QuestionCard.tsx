import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, HelpCircle, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | undefined;
  isBookmarked: boolean;
  onSelectOption: (id: number, option: string) => void;
  onToggleBookmark: (id: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  isBookmarked,
  onSelectOption,
  onToggleBookmark,
}) => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const isAnswered = !!selectedOption;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Header / Badges */}
      <div className="px-5 py-4 border-b border-gray-100 dark:border-slate-700 flex justify-between items-start bg-gray-50/50 dark:bg-slate-850/50">
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs font-semibold rounded bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
            #{question.id}
          </span>
          <span className={clsx(
            "px-2 py-1 text-xs font-semibold rounded",
            question.difficulty === 'easy' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            question.difficulty === 'medium' && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            question.difficulty === 'hard' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          )}>
            {question.difficulty === 'easy' ? '简单' : question.difficulty === 'medium' ? '中等' : '困难'}
          </span>
        </div>
        <button
          onClick={() => onToggleBookmark(question.id)}
          className={clsx(
            "p-1.5 rounded-full transition-colors",
            isBookmarked 
              ? "text-red-500 bg-red-50 dark:bg-red-900/20" 
              : "text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
          )}
          title="加入错题本"
        >
          <Bookmark className={clsx("w-5 h-5", isBookmarked && "fill-current")} />
        </button>
      </div>

      {/* Question Body */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-6 leading-relaxed math-text">
          {question.questionText}
        </h3>

        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selectedOption === opt.label;
            const isThisCorrect = opt.label === question.correctOption;
            
            // Logic for coloring options after answer
            let buttonClass = "border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700";
            let icon = <span className="w-5 h-5 border rounded-full border-gray-300 dark:border-slate-500 flex items-center justify-center text-xs text-gray-400">{opt.label}</span>;
            
            if (isAnswered) {
              if (isThisCorrect) {
                buttonClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                icon = <CheckCircle className="w-5 h-5 text-green-500" />;
              } else if (isSelected) {
                buttonClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
                icon = <XCircle className="w-5 h-5 text-red-500" />;
              } else {
                buttonClass = "opacity-50 border-gray-100 dark:border-slate-700";
              }
            } else if (isSelected) {
              buttonClass = "border-primary-500 ring-1 ring-primary-500 bg-primary-50 dark:bg-primary-900/20";
            }

            return (
              <button
                key={opt.label}
                onClick={() => !isAnswered && onSelectOption(question.id, opt.label)}
                disabled={isAnswered}
                className={clsx(
                  "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center gap-3",
                  buttonClass
                )}
              >
                <div className="flex-shrink-0">{icon}</div>
                <div className="math-text text-sm md:text-base">{opt.text}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer / Analysis */}
      {isAnswered && (
        <div className="bg-gray-50 dark:bg-slate-850/50 border-t border-gray-100 dark:border-slate-700 p-4">
          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            {showAnalysis ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showAnalysis ? "收起解析" : "查看解析"}
          </button>
          
          {showAnalysis && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2 mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <HelpCircle className="w-4 h-4" />
                答案解析
              </div>
              <div 
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed math-text bg-white dark:bg-slate-800 p-3 rounded border border-gray-100 dark:border-slate-700 shadow-sm"
                dangerouslySetInnerHTML={{ __html: question.analysis }}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {question.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;