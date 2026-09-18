import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * Resolve both static routes and param routes (`/lesson/x`, `/learn/l8`).
 * A raw <Link to="/lesson/l0-cadd"> does not match `/lesson/$lessonId`.
 */
export function AppLink({ to, className, children, onClick }: Props) {
  const lesson = to.match(/^\/lesson\/([^/?#]+)/);
  if (lesson) {
    return (
      <Link
        to="/lesson/$lessonId"
        params={{ lessonId: lesson[1]! }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  const learn = to.match(/^\/learn\/([^/?#]+)/);
  if (learn) {
    return (
      <Link
        to="/learn/$levelId"
        params={{ levelId: learn[1]! }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  const lab = to.match(/^\/labs\/([^/?#]+)/);
  if (lab) {
    return (
      <Link
        to="/labs/$labId"
        params={{ labId: lab[1]! }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  const quiz = to.match(/^\/quiz\/([^/?#]+)/);
  if (quiz) {
    return (
      <Link
        to="/quiz/$quizId"
        params={{ quizId: quiz[1]! }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link to={to as "/"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
