import creativeDesignImage from '../../assets/designer-team-working-on-creative-design.png';

const Branding = () => {
  return (
    <div>
      <section className='mb-20 md:flex md:flex-row-reverse md:justify-between'>
        <div className="branding-text flex flex-col gap-y-12 md:max-w-md  my-auto mb-8 md:my-auto">
          <h2 className="font-bold text-center text-3xl md:text-left">Branding & Design System</h2>
          <div>
              <p className="text-center text-lg md:text-left">Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
          </div>
          <div className="arrow-svg mx-auto md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
            <path d="M7.29166 22.2424C7.68149 22.6336 8.31466 22.6347 8.70587 22.2448L15.081 15.8921C15.4722 15.5022 15.4733 14.8691 15.0835 14.4779C14.6936 14.0866 14.0605 14.0855 13.6693 14.4754L8.00249 20.1223L2.35558 14.4555C1.96574 14.0643 1.33258 14.0632 0.94137 14.453C0.55016 14.8428 0.549047 15.476 0.938885 15.8672L7.29166 22.2424ZM7.03784 -0.00175695L7 21.5347L9 21.5382L9.03784 0.00175695L7.03784 -0.00175695Z" fill="#272D38"/>
            </svg>
          </div>
          <div className="desktop-arrow-svg hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path d="M23.2493 8.70711C23.6398 8.31658 23.6398 7.68342 23.2493 7.29289L16.8853 0.928932C16.4948 0.538408 15.8616 0.538408 15.4711 0.928932C15.0806 1.31946 15.0806 1.95262 15.4711 2.34315L21.1279 8L15.4711 13.6569C15.0806 14.0474 15.0806 14.6805 15.4711 15.0711C15.8616 15.4616 16.4948 15.4616 16.8853 15.0711L23.2493 8.70711ZM0.313232 9H22.5421V7H0.313232V9Z" fill="#272D38"/>
            </svg>
          </div>
        </div>
        <div className="branding-img flex justify-center basis-1/2">
            <img src={creativeDesignImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Branding
