import React from 'react';
import { Bell, RotateCcw, Calendar } from 'lucide-react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useTrainer } from '../../context/TrainerContext';
import { getCurrentDateISO, formatReadableDate } from '../../utils/dateTimeUtils';

export const Header: React.FC = () => {
  const { activeRemindersCount, resetAllMockData } = useTrainer();
  const pathname = useRouterState({ select: state => state.location.pathname.replace(/^\/academic/, '') || '/' });

  const getPageTitle = (pathname: string): { title: string; subtitle: string } => {
    if (pathname.startsWith('/notes/')) {
      return { title: 'Notes Management', subtitle: 'Prepare and manage notes for assigned module topics' };
    }

    switch (pathname) {
      case '/':
        return { title: 'Dashboard Overview', subtitle: "Monitor today's sessions and pending syllabus actions" };
      case '/schedule':
        return { title: 'My Class Schedule', subtitle: 'Review assigned teaching schedules and request changes' };
      case '/syllabus':
        return { title: 'My Class Schedule', subtitle: 'Review batch schedules and track topic progress' };
      case '/notes':
        return { title: 'Notes Management', subtitle: 'Prepare and manage notes for assigned module topics' };
      case '/attendance':
        return { title: 'Attendance', subtitle: 'Review batch-wise biometric attendance records' };
      case '/history':
        return { title: 'Session History', subtitle: 'Archive of conducted and documented academic sessions' };
      case '/notifications':
        return { title: 'Notifications & Reminders', subtitle: 'Syllabus overdue alerts and schedule actions' };
      case '/examinations':
        return { title: 'Examinations', subtitle: 'Review Admin schedules and submit examination marks' };
      case '/profile':
        return { title: 'Trainer Profile', subtitle: 'Faculty credentials, assigned batches, and mock configuration' };
      default:
        return { title: 'Trainer Portal', subtitle: 'Faculty Management System' };
    }
  };

  const { title, subtitle } = getPageTitle(pathname);
  const todayFormatted = formatReadableDate(getCurrentDateISO());

  return (
    <header className="portal-header flex flex-wrap items-end justify-between gap-4 pb-5">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <span className="hidden md:inline-flex items-center rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-semibold text-lime-800">
            Advanced Python & Database Foundation
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="hidden sm:flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm text-slate-600 font-mono-numbers">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span>{todayFormatted}</span>
        </div>
        <button
          onClick={resetAllMockData}
          title="Reset local mock state to initial data"
          className="ghost-btn flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden lg:inline">Reset Mock Data</span>
        </button>
        <Link
          to="/academic/notifications"
          className="glass-icon relative"
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell className="w-[18px] h-[18px]" />
          {activeRemindersCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-salmon px-1 text-[10px] font-bold text-lime-foreground font-mono-numbers">
              {activeRemindersCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
