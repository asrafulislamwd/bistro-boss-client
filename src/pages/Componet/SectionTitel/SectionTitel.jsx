
const SectionTitel = ({Heading, Subheading}) => {
  return (
    <div className="w-3/12 mx-auto text-center my-10">
      <p className="text-yellow-500 mb-5">--- {Subheading} ---</p>
      <h3 className="text-3xl uppercas border-y-4 py-5">{Heading}</h3>
    </div>
  );
};

export default SectionTitel;