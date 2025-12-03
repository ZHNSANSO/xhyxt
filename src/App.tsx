import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import { questions } from './data';
import { FilterMode } from './types';
import { Search, Filter, AlertCircle, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSelectOption = (id: number, option: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: option }));
  };

  const handleToggleBookmark = (id: number) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      // Search logic
      const matchesSearch = q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            q.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (!matchesSearch) return false;

      // Filter modes
      if (filterMode === 'bookmarked') {
        return bookmarks.has(q.id);
      }
      if (filterMode === 'wrong') {
        const userAnswer = userAnswers[q.id];
        return userAnswer && userAnswer !== q.correctOption;
      }
      return true;
    });
  }, [searchQuery, filterMode, bookmarks, userAnswers]);

  // Stats
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => ans === questions.find(q => q.id === Number(id))?.correctOption
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        
        {/* Progress Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">总进度</div>
            <div className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
              {answeredCount} <span className="text-sm text-gray-400 font-normal">/ {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-primary-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">正确率</div>
            <div className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
              {answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0}<span className="text-sm">%</span>
            </div>
          </div>

           <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">错题数</div>
             <div className="text-2xl font-bold text-red-500 mt-1">
              {answeredCount - correctCount}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">收藏/重难点</div>
             <div className="text-2xl font-bold text-amber-500 mt-1">
              {bookmarks.size}
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="sticky top-16 z-40 bg-gray-50/95 dark:bg-slate-900/95 backdrop-blur py-4 mb-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索题目内容或知识点..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-gray-200 dark:border-slate-700">
            <button 
              onClick={() => setFilterMode('all')}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                filterMode === 'all' ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100 shadow-sm" : "text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              全部
            </button>
            <button 
              onClick={() => setFilterMode('wrong')}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                filterMode === 'wrong' ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100 shadow-sm" : "text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              <AlertCircle className="w-3 h-3" />
              错题
            </button>
             <button 
              onClick={() => setFilterMode('bookmarked')}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                filterMode === 'bookmarked' ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-100 shadow-sm" : "text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              <Filter className="w-3 h-3" />
              收藏
            </button>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                selectedOption={userAnswers[q.id]}
                isBookmarked={bookmarks.has(q.id)}
                onSelectOption={handleSelectOption}
                onToggleBookmark={handleToggleBookmark}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Search className="w-8 h-8 text-gray-300 dark:text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">未找到相关题目</h3>
              <p className="text-gray-500 dark:text-slate-400">请尝试更换搜索关键词或筛选条件</p>
            </div>
          )}
        </div>

        {filteredQuestions.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-400 dark:text-slate-600 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                已显示 {filteredQuestions.length} 道题目
            </div>
        )}

      </main>
    </div>
  );
}

export default App;