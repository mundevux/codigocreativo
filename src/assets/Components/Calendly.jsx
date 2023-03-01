import React from 'react';

class CalendlyButton extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
    const head = document.querySelector('head');
    const script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    head.removeChild(script);
  }

  render() {
    return (
      <div>
        <button onClick={() => Calendly.showPopupWidget('https://calendly.com/codcreativo/30min')} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
            <span className="relative text-base font-semibold text-white"><i className="fa-regular fa-calendar mr-2"></i>Agenda una cita</span>
        </button>
      </div>
    );
  }
}

export default CalendlyButton;