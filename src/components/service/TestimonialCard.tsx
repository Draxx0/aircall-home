import clsx from "clsx";
import { servicePresentationType } from "../../types/servicePresentationType";

export type TestimonialCardTheme = "white" | "blue";

const TestimonialCard = ({
  testimonial,
  theme,
}: {
  testimonial: servicePresentationType["services"][0]["testimonial"];
  theme: TestimonialCardTheme;
}) => {
  const cardClasses = clsx(
    {
      "bg-white bg-opacity-10": theme === "blue",
    },
    "p-6 bg-white rounded-[24px] box-shadow-sm"
  );
  return (
    <div className={cardClasses}>
      <div className="flex gap-4">
        <img
          src={testimonial.image}
          className="w-12 h-12 object-cover rounded-full"
          alt="logo entreprise"
        />
        <div className="space-y-3">
          <div>
            <h4 className="text-secondary-900 text-lg font-semibold">
              {testimonial.author}
            </h4>
            <p className="text-secondary-900 mb-2 text-lg">
              {testimonial.function}
            </p>
          </div>
          <blockquote className="text-secondary-900 opacity-70 text-lg">
            {testimonial.text}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
