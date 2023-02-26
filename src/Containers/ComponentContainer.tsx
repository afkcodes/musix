interface ComponentContainerProps {
  children: React.ReactNode;
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children
}) => {
  return <div className='mb-2 px-3 text-gray-300'>{children}</div>;
};

export default ComponentContainer;
