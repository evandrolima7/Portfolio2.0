export default function outSideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';
    
    if(!element.hasAttribute(outside)){
     events.forEach((userEvent) => {
      setTimeout(() => {html.addEventListener(userEvent, handleOutSideClick)},0)
    })
    element.setAttribute(outside, "");
    }
    
    function handleOutSideClick(event){
      if(!element.contains(event.target))
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
      html.removeEventListener(userEvent, handleOutSideClick);
    })
      callback();
    }
  }