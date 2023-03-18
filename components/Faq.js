import { Disclosure } from "@headlessui/react";
import Question from "./Question";

const Faq = ({ questions }) => {
  if (!questions || !questions.length) return null;

  return (
    <div className="questions">
      <div className="questions__title-container">
        <h3 className="questions__title">Preguntas Frecuentes</h3>
      </div>
      <ul className="questions__list">
        {questions.map((item) => {
          return (
            <Disclosure key={item.id} as="li" className="questions__item">
              {({ open }) => <Question data={item} isOpen={open} />}
            </Disclosure>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
