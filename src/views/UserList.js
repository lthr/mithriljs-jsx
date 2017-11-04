const m = require('mithril')
const User = require('../models/User')

module.exports = {
  oninit: User.loadList,
  view() {
    return (
      <div className="user-list">
        {User.list.map(user => 
          <a className='user-list-item'
            href={`/edit/${user.id}`}
            oncreate={m.route.link}>
            {user.firstName} {user.lastName}
          </a>
        )}
      </div>
    )
  }
}
