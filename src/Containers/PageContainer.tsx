import { useLocation, useRoutes } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { routes } from '~/routes/routes';

const PageContainer = () => {
  const pages = useRoutes(routes);
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames='fade'
        unmountOnExit
      >
        {() => <div className='bg-[#100F0F] pb-20 pt-4'>{pages}</div>}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageContainer;
