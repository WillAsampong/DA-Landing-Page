import analyzingDataImage from '../../assets/businessman-analyzing-data.png';

const Custome = () => {
  return (
    <div>
      <section className='mb-20 mt-20'>
        <div className="branding-text flex flex-col gap-y-4">
            <h2 className="font-bold text-center text-3xl">Custome & Plugin Development</h2>
            <div>
                <p className="text-center text-lg">Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
            </div>
            <div className="arrow-svg mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
                <path d="M7.29166 22.2424C7.68149 22.6336 8.31466 22.6347 8.70587 22.2448L15.081 15.8921C15.4722 15.5022 15.4733 14.8691 15.0835 14.4779C14.6936 14.0866 14.0605 14.0855 13.6693 14.4754L8.00249 20.1223L2.35558 14.4555C1.96574 14.0643 1.33258 14.0632 0.94137 14.453C0.55016 14.8428 0.549047 15.476 0.938885 15.8672L7.29166 22.2424ZM7.03784 -0.00175695L7 21.5347L9 21.5382L9.03784 0.00175695L7.03784 -0.00175695Z" fill="#272D38"/>
                </svg>
            </div>
        </div>
        <div className="branding-img flex justify-center mt-8">
            <img src={analyzingDataImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Custome