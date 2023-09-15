const Section = ({
  children,
  isContainer = false,
}: {
  children: React.ReactElement;
  isContainer?: boolean;
}) => {
  return (
    <section className={`pb-16 ${isContainer ? "lg:container px-4" : ""}`}>
      {children}
    </section>
  );
};

export default Section;
