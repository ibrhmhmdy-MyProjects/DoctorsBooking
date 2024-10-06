
// eslint-disable-next-line react/prop-types
export const SectionHeader = ({title,subTitle}) => {
  return <>
    <h1 className="text-3xl font-medium">{title}</h1>
    <p className="text-center text-sm sm:w-1/3">{subTitle}</p>
  </>;
};

