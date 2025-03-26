
export interface Workout {
  id: string;
  name: string;
  category: WorkoutCategory;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetMuscles: string[];
  defaultSets: number;
  defaultReps: number;
  iconName?: string;
}

export type WorkoutCategory = 'strength' | 'cardio' | 'flexibility' | 'balance';

export interface WorkoutRecord {
  id: string;
  workoutId: string;
  date: Date;
  sets: number;
  reps: number;
  completed: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  unlocked: boolean;
  progress: number;
  target: number;
  category: 'workout' | 'consistency' | 'milestone';
}

export interface Goal {
  id: string;
  description: string;
  target: number;
  current: number;
  unit: string;
  deadline?: Date;
  completed: boolean;
}

// Sample workout data
export const workoutData: Workout[] = [
  {
    id: '1',
    name: 'Push-ups',
    category: 'strength',
    description: 'Standard push-ups targeting chest, shoulders, and triceps',
    difficulty: 'intermediate',
    targetMuscles: ['chest', 'shoulders', 'triceps', 'core'],
    defaultSets: 3,
    defaultReps: 10
  },
  {
    id: '2',
    name: 'Air Squats',
    category: 'strength',
    description: 'Bodyweight squats targeting legs and glutes',
    difficulty: 'beginner',
    targetMuscles: ['quadriceps', 'hamstrings', 'glutes', 'calves'],
    defaultSets: 3,
    defaultReps: 15
  },
  {
    id: '3',
    name: 'Plank',
    category: 'strength',
    description: 'Static core exercise improving stability and endurance',
    difficulty: 'beginner',
    targetMuscles: ['core', 'shoulders', 'back'],
    defaultSets: 3,
    defaultReps: 1, // 1 rep = time duration
    iconName: 'activity'
  },
  {
    id: '4',
    name: 'Burpees',
    category: 'cardio',
    description: 'Full-body exercise that builds strength and endurance',
    difficulty: 'advanced',
    targetMuscles: ['full body', 'cardio'],
    defaultSets: 3,
    defaultReps: 10
  },
  {
    id: '5',
    name: 'Mountain Climbers',
    category: 'cardio',
    description: 'Dynamic exercise targeting core and improving cardiovascular fitness',
    difficulty: 'intermediate',
    targetMuscles: ['core', 'shoulders', 'cardio'],
    defaultSets: 3,
    defaultReps: 20, // per side
    iconName: 'activity'
  },
  {
    id: '6',
    name: 'Lunges',
    category: 'strength',
    description: 'Single-leg exercise targeting quads, hamstrings, and glutes',
    difficulty: 'beginner',
    targetMuscles: ['quadriceps', 'hamstrings', 'glutes', 'calves'],
    defaultSets: 3,
    defaultReps: 10, // per leg
    iconName: 'activity'
  }
];

// Sample achievements data
export const achievementsData: Achievement[] = [
  {
    id: '1',
    name: 'First Workout',
    description: 'Complete your first workout',
    unlocked: true,
    progress: 1,
    target: 1,
    category: 'milestone'
  },
  {
    id: '2',
    name: 'Consistency Champion',
    description: 'Complete workouts 3 days in a row',
    unlocked: false,
    progress: 1,
    target: 3,
    category: 'consistency'
  },
  {
    id: '3',
    name: 'Push-up Master',
    description: 'Complete 100 push-ups total',
    unlocked: false,
    progress: 35,
    target: 100,
    category: 'workout'
  },
  {
    id: '4',
    name: 'Squat Expert',
    description: 'Complete 200 squats total',
    unlocked: false,
    progress: 90,
    target: 200,
    category: 'workout'
  },
  {
    id: '5',
    name: 'Weekly Warrior',
    description: 'Work out at least 5 times in a week',
    unlocked: false,
    progress: 3,
    target: 5,
    category: 'consistency'
  }
];

// Sample goals data
export const goalsData: Goal[] = [
  {
    id: '1',
    description: 'Complete 10 workouts this month',
    target: 10,
    current: 4,
    unit: 'workouts',
    completed: false
  },
  {
    id: '2',
    description: 'Do 100 push-ups in a week',
    target: 100,
    current: 35,
    unit: 'push-ups',
    completed: false
  },
  {
    id: '3',
    description: 'Work out for at least 20 minutes every day',
    target: 7,
    current: 3,
    unit: 'days',
    completed: false
  }
];

// Mock workout history for progress view
export const workoutHistory: {date: string; count: number}[] = [
  {date: '2023-06-01', count: 1},
  {date: '2023-06-03', count: 2},
  {date: '2023-06-04', count: 1},
  {date: '2023-06-07', count: 2},
  {date: '2023-06-10', count: 3},
  {date: '2023-06-11', count: 1},
  {date: '2023-06-12', count: 2},
  {date: '2023-06-15', count: 1},
  {date: '2023-06-17', count: 2}
];
