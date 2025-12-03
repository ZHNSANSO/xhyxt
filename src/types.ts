export interface Question {
  id: number;
  questionText: string;
  options: {
    label: string;
    text: string;
  }[];
  correctOption: string;
  analysis: string; // HTML allowed string for math formatting
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface UserProgress {
  answered: Record<number, string>; // questionId -> optionLabel
  bookmarks: number[]; // Array of questionIds
  showAnalysis: number[]; // Array of questionIds where analysis is revealed
}

export type FilterMode = 'all' | 'wrong' | 'bookmarked';