import React from 'react'

const Form = ({ onSubmit, name, phone }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input type="text" value={name.value} name="name" onChange={name.onChange} />
        <br/>
        phone: <input type="text" value={phone.value} name="phone" onChange={phone.onChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form