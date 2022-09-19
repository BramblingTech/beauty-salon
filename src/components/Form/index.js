import React, {Component} from 'react'
import FormButton from '../FormButton'
import './style.sass'
const openLabel = (el) =>{
  var parent_item = el.closest(".container-limit");
  parent_item.querySelector('label').classList.add('container-limit__label_active');
}
const closeLabel = (el) => {
  var parent_item = el.closest(".container-limit");
  if (el.value.length === 0) {
    parent_item.querySelector('label').classList.remove('container-limit__label_active');
  }
}

class Form extends Component{
  state = {
    name: '',
    phone: '',
    message: '',
    form: this.props.form?this.props.form:''
  }
  handleChange = input => e =>{
    if(input === 'phone'){
      replaceSymbol(e.target);
    }
    checkField(e.target, input, false);
    this.setState({
      [input]: e.target.value
    })
  }
  disableScroll = function(target = false) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.position = 'fixed';
    if (target) {
        target.style.overflow = 'auto';
    }
  }
  submitForm = (e) =>{
    const {
      name,
      phone,
      message,
      form
    } = this.state;
    e.preventDefault();
    var arrs = new Map([
      [document.querySelector(`#name${form}`), 'name'],
      [document.querySelector(`#phone${form}`), 'phone'],
      [document.querySelector(`#message${form}`), 'message'],
    ]);
    if(validateWhenSend(arrs)){
      let formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("message", message);
      var request = new XMLHttpRequest();
      var url = "mail.php";
      var params =new URLSearchParams(formData).toString();
      request.responseType =  "json";
      request.open("POST", url, true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {

        }
      });
      request.send(params);
      console.log(request);
      e.target.reset();
      this.disableScroll();
          document.querySelector('.modal_thank').classList.add('modal_active');
          this.setState({
            name: '',
            phone: '',
            message: ''
          });
          [
            document.querySelector(`#name${form}`),
            document.querySelector(`#phone${form}`),
            document.querySelector(`#message${form}`)
          ].forEach((key)=>{
            var parent_item1 = key.closest(".container-limit");
            parent_item1.querySelector('label').classList.remove('container-limit__label_active');
          });
    }
  }
  render(){
    const {
      name,
      phone,
      message
    } = this.state;
    return (
    <form  onSubmit={this.submitForm}>
      <div className="container-limit">
        <label htmlFor="name" className="container-limit__label">Ваше Имя</label>
        <input name="name" id={this.props.form?`name${this.props.form}`:'name'}  type="text"  placeholder="" value={name} onFocus={(e)=>{openLabel(e.target)}} onBlur={(e)=>{closeLabel(e.target)}} onChange={this.handleChange('name')}/>
        <span className="container-limit__text"></span>
      </div>
      <div className="container-limit">
        <label htmlFor="phone" className="container-limit__label">Ваш телефон</label>
        <input name="phone" type="tel" id={this.props.form?`phone${this.props.form}`:'phone'}  placeholder="" value={phone} onFocus={(e)=>{openLabel(e.target)}} onBlur={(e)=>{closeLabel(e.target)}} onChange={this.handleChange('phone')}/>
        <span className="container-limit__text"></span>
      </div>
      <div className="container-limit container-limit_textarea">
        <label htmlFor="message" className="container-limit__label">Ваш комментарий</label>
        <textarea name="message" id={this.props.form?`message${this.props.form}`:'message'} value={message} onFocus={(e)=>{openLabel(e.target)}} onBlur={(e)=>{closeLabel(e.target)}} onChange={this.handleChange('message')}></textarea>
        <span className="container-limit__text"></span>
      </div>
      <FormButton className='container-limit__button'  title='отправить'/>
    </form>
    )
    }
}
function replaceSymbol(el){
  el.value=el.value.replace(/[^0-9]/g,'')
}
function checkField(item, conditionName, sending){
  var message='Это поле недействительно';
  // eslint-disable-next-line
  let rv_name=/^[a-zA-Z'а-яА-Я][a-zA-Z-' а-яА-Я]+[a-zA-Z'а-яА-Я]?$/;
  // eslint-disable-next-line
  let rv_email = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,})*[0-9A-Za-z]{1})@([0-9A-Za-z]{1}[-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,4})$/u;
  // eslint-disable-next-line
  let rv_number = /^\d{1,}$/;
  // eslint-disable-next-line
  //phone=^\+?(?!(?:.*-){3})(?!.*--)(?=[^()]*\([^()]+\)[^()]*$|[^()]*$)(?!.*-.*[()])(?:[()-]*\d){10}[()-]*$
  // eslint-disable-next-line
  let rv_url =/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;
  var condition;
  switch (conditionName) {
    case 'name':
      condition=item.value.length>=2  && rv_name.test(item.value) && item.value.length<=25;
      if(item.value.length<2){
        message='Не менее 2-х символов';
      }
      else if(item.value.length>=25 && rv_name.test(item.value)){
        message='Не более 25 символов';
      }
      break;
    case 'mail':
      condition=item.value !== '' && rv_email.test(item.value) && item.value.indexOf('@')<=64 && item.value.lastIndexOf('.')-item.value.indexOf('@')<=188;
      break;
    case 'phone':
      condition=item.value !== '' && rv_number.test(item.value) && item.value.length>=10 && item.value.length<=15;
      if(item.value.length<=10){
        message='Не менее 10 символов';
      }
      else if(item.value.length>=15){
        message='Не более 15 символов';
      }
      break;
      case 'url':
      condition=item.value !== '' && rv_url.test(item.value);
      break;
    case 'message':
      condition=item.value !== '' && item.value.length>=2 && item.value.length<=180;
      if(item.value.length<2){
        message='Не менее 2-х символов';
      }
      else if(item.value.length>=180){
        message='Не более 180 символов';
      }
      break;
    default:
      condition=item.value !== '';
      break;
  }
  var parent_item=item.closest(".container-limit");
  if(condition){
    if(sending){
      parent_item.classList.remove('container-limit_correct');
    }
    else{
      parent_item.classList.add('container-limit_correct');
    }
    if(parent_item.querySelector('.container-limit__text')){
      parent_item.querySelector('.container-limit__text').textContent='';
    }

    parent_item.classList.remove('container-limit_incorrect');
    return true;
  }
  else{
    if(parent_item.querySelector('.container-limit__text')){
      parent_item.querySelector('.container-limit__text').textContent=message;
    }
    parent_item.classList.remove('container-limit_correct');
    parent_item.classList.add('container-limit_incorrect');
    return false;
  }
}
function validateWhenSend(arr){
  var boll=true;
  arr.forEach((value,key)=>{
      boll&=checkField(key, value, true);
  });
  return boll;
}


export default Form
