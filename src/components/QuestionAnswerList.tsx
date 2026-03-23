type QuestionAnswerItem = {
  question: string;
  answer: string;
};

type QuestionAnswerListProps = {
  items: readonly QuestionAnswerItem[];
  columns?: 1 | 2;
};

const QuestionAnswerList = ({ items, columns = 2 }: QuestionAnswerListProps) => {
  return (
    <div className={columns === 2 ? "grid gap-6 lg:grid-cols-2" : "grid gap-6"}>
      {items.map((item) => (
        <article key={item.question} className="section-frame px-6 py-6 sm:px-7">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.question}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.answer}</p>
        </article>
      ))}
    </div>
  );
};

export default QuestionAnswerList;
