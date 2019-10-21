import react from react;
import materialize from '../../css/materialize.min.css';

const applyFunds = () =>{
    return(
        <div>
            <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input
          placeholder="Placeholder"
          id="first_name"
          type="text"
          className="validate"
        />
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" />
        <label htmlFor="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input
          disabled
          defaultValue="I am not editable"
          id="disabled"
          type="text"
          className="validate"
        />
        <label htmlFor="disabled">Disabled</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        This is an inline input field:
        <div className="input-field inline">
          <input id="email_inline" type="email" className="validate" />
          <label htmlFor="email_inline">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            Helper text
          </span>
        </div>
      </div>
    </div>
  </form>
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input id="input_text" type="text" data-length={10} />
        <label htmlFor="input_text">Input text</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <textarea
          id="textarea2"
          className="materialize-textarea"
          data-length={120}
          defaultValue={""}
        />
        <label htmlFor="textarea2">Textarea</label>
      </div>
    </div>
  </form>
</div>;

        </div>
    )
}