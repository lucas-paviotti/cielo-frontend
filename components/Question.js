import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const AnimatedDisclosurePanel = animated(Disclosure.Panel);

const Question = ({ data, isOpen }) => {
  const [ref, { height: viewHeight }] = useMeasure();

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
    },
  });

  return (
    <>
      <Disclosure.Button
        className={`questions__button${isOpen ? " open" : ""}`}
      >
        <span>{data.question}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="questions__chevron"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Disclosure.Button>
      <AnimatedDisclosurePanel
        className="questions__answer"
        style={{
          opacity,
          height,
        }}
        static
      >
        <div ref={ref} className="questions__answer-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="markdown"
          >
            {data.answer}
          </ReactMarkdown>
        </div>
      </AnimatedDisclosurePanel>
    </>
  );
};

export default Question;
