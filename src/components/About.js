import React from 'react'

const About = (props) => {

  document.title="TextAmplify - About"

  return (
    <div>
    <div className={`container text-${props.mode==='light'?'black':'white'}`}>
      <h1 className='mb-4'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button text-${props.mode === 'light'?'black':'white'}`} style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode === 'light'?'secondary':'light'}`}>
      TextAmplify gives you a way to analyze your text quickly and efficiently. Be it word count, character count or any moderation you want for your text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed text-${props.mode === 'light'?'black':'white'}`} style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode === 'light'?'secondary':'light'}`}>
      TextAmplify is a free character counter tool that provides instant character count & word count statistics for a given text. TextAmplify reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed text-${props.mode === 'light'?'black':'white'}`} style={{backgroundColor: props.mode=== 'light'?'white':'#274760'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode === 'light'?'secondary':'light'}`}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
      <div className="container my-3">
      {/* <button onClick={toggleMode} type="button" className="btn btn-primary">{modeSwitch}</button> */}
      </div>
      


    </div> 
    </div> 
  )
}

export default About