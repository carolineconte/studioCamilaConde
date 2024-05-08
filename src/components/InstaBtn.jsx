'use client'

function InstaBtn() {

  const handleClick = () => {
    window.open('https://www.instagram.com/studiocamilaconde/');
  };

  return (
    <button id='Ir para Instagram' aria-label="Instagram button" name='Ir para Instagram'
      className="InstaBtn z-50 bg-rose p-2 rounded-full md:p-4" onClick={handleClick}>
      <svg width="24" height="23" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.0567 0C14.0324 0 13.4019 0.0219688 11.4286 0.111771C9.45907 0.201958 8.11474 0.51376 6.93845 0.97125C5.72169 1.44377 4.68954 2.07585 3.66125 3.10453C2.63219 4.13282 2.0001 5.16497 1.52604 6.38134C1.06739 7.55802 0.755207 8.90274 0.666561 10.8714C0.578301 12.8448 0.555176 13.4757 0.555176 18.5C0.555176 23.5243 0.57753 24.1529 0.666947 26.1262C0.75752 28.0957 1.06932 29.4401 1.52643 30.6163C1.99933 31.8331 2.63142 32.8653 3.66009 33.8935C4.688 34.9226 5.72015 35.5562 6.93614 36.0288C8.1132 36.4862 9.45792 36.798 11.427 36.8882C13.4003 36.978 14.0305 37 19.0544 37C24.0791 37 24.7077 36.978 26.681 36.8882C28.6505 36.798 29.9964 36.4862 31.1735 36.0288C32.3898 35.5562 33.4204 34.9226 34.4483 33.8935C35.4774 32.8653 36.1095 31.8331 36.5835 30.6167C37.0383 29.4401 37.3505 28.0953 37.443 26.1266C37.5317 24.1533 37.5548 23.5243 37.5548 18.5C37.5548 13.4757 37.5317 12.8452 37.443 10.8718C37.3505 8.90235 37.0383 7.55802 36.5835 6.38173C36.1095 5.16497 35.4774 4.13282 34.4483 3.10453C33.4193 2.07547 32.3902 1.44339 31.1723 0.97125C29.9929 0.51376 28.6478 0.201958 26.6783 0.111771C24.705 0.0219688 24.0768 0 19.0509 0H19.0567ZM17.397 3.3338C17.8896 3.33303 18.4392 3.3338 19.0566 3.3338C23.9961 3.3338 24.5816 3.35153 26.5322 3.44018C28.3359 3.52266 29.3149 3.82405 29.967 4.07727C30.8304 4.41258 31.4459 4.81342 32.093 5.46092C32.7405 6.10842 33.1413 6.72508 33.4774 7.58842C33.7306 8.23977 34.0324 9.21873 34.1145 11.0225C34.2031 12.9727 34.2224 13.5585 34.2224 18.4957C34.2224 23.4329 34.2031 24.0187 34.1145 25.9689C34.032 27.7727 33.7306 28.7516 33.4774 29.403C33.1421 30.2663 32.7405 30.8811 32.093 31.5282C31.4455 32.1757 30.8307 32.5765 29.967 32.9118C29.3157 33.1662 28.3359 33.4668 26.5322 33.5493C24.582 33.638 23.9961 33.6572 19.0566 33.6572C14.1168 33.6572 13.5313 33.638 11.5811 33.5493C9.77735 33.4661 8.79839 33.1647 8.14588 32.9115C7.28255 32.5761 6.66588 32.1753 6.01838 31.5278C5.37088 30.8803 4.97005 30.2652 4.63396 29.4015C4.38074 28.7501 4.07896 27.7712 3.99687 25.9674C3.90822 24.0172 3.89049 23.4314 3.89049 18.4911C3.89049 13.5508 3.90822 12.9681 3.99687 11.0179C4.07935 9.21411 4.38074 8.23515 4.63396 7.58302C4.96927 6.71969 5.37088 6.10302 6.01838 5.45552C6.66588 4.80802 7.28255 4.40719 8.14588 4.0711C8.798 3.81673 9.77735 3.5161 11.5811 3.43324C13.2877 3.35616 13.9491 3.33303 17.397 3.32918V3.3338ZM28.9318 6.40558C27.7062 6.40558 26.7118 7.3988 26.7118 8.62481C26.7118 9.85044 27.7062 10.8448 28.9318 10.8448C30.1574 10.8448 31.1518 9.85044 31.1518 8.62481C31.1518 7.39919 30.1574 6.40558 28.9318 6.40558ZM19.0568 8.99943C13.8101 8.99943 9.55623 13.2533 9.55623 18.5C9.55623 23.7466 13.8101 27.9985 19.0568 27.9985C24.3034 27.9985 28.5557 23.7466 28.5557 18.5C28.5557 13.2533 24.3034 8.99943 19.0568 8.99943ZM19.0567 12.3333C22.4622 12.3333 25.2233 15.094 25.2233 18.5C25.2233 21.9055 22.4622 24.6666 19.0567 24.6666C15.6508 24.6666 12.89 21.9055 12.89 18.5C12.89 15.094 15.6508 12.3333 19.0567 12.3333Z" fill="white" />
      </svg>
    </button>
  )
}

export default InstaBtn;