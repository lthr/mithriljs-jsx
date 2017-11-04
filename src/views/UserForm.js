const m = require('mithril')
const User = require('../models/User')

module.exports = {
  oninit(vnode) {
    User.load(vnode.attrs.id)
  },
  view() {
    return (
      <form onsubmit={e=>{
        e.preventDefault()
        User.save()
      }}>
        <label className="label">First name</label>
        <input className="input"
          type="text"
          placeholder="First name"
          oninput={m.withAttr('value', value => User.current.firstName = value)}
          value={User.current.firstName} />
        <label className="label">Last name</label>
        <input className="input"
          type="text"
          placeholder="Last name"
          oninput={m.withAttr('value', value => User.current.lastName = value)}
          value={User.current.lastName} />
        <button className="button">Save</button>
      </form>
    )
  }
}