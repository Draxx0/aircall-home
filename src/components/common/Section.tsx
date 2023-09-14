const Section = ({
  children,
  isContainer = false,
}: {
  children: React.ReactElement;
  isContainer?: boolean;
}) => {
  return (
    <section className={`pb-16 ${isContainer ? "container" : null}`}>
      {children}
    </section>
  );
};

export default Section;
