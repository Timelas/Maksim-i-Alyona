import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw8hPcQFs9rQTCqOHfM63na1J4Oe2CYecQOtOf0ifb_R9CXT9qf76JqRXGNhXxwgHA/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <Title title={"Опрос"}/>
      <div className="question__stone"></div>
      { isFormVisible ?
        <div className="question__container">
          <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="question__string">
            <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
            <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
          </p>
          <fieldset className="question__string">Предпочтения по еде:
            <label  htmlFor="chicken" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Курица" id="chicken"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Курица</span>
            </label>
            <label htmlFor="meat" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Мясо" id="meat"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Мясо</span>
            </label>
            <label htmlFor="fish" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Рыба" id="fish"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Рыба</span>
            </label>
          </fieldset>
          <p className="question__string">
            <label htmlFor="alco" className="question__label-input">Пожелания по алкоголю:</label>
            <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
          </p>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
        </form> 
      </div>
      :
      <p className="question__text question__text-feedback">Форма отправлена!</p>
      }
      
    </section>
  );
}

export default Questions;