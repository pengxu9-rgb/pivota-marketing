import type { ReactNode } from "react";

type AnswerBlockProps = {
  children: ReactNode;
  className?: string;
};

const AnswerBlock = ({ children, className = "" }: AnswerBlockProps) => {
  return (
    <div
      className={`rounded-3xl border border-border/70 bg-card/70 px-6 py-5 text-base leading-8 text-muted-foreground backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
};

export default AnswerBlock;
