const m = require('mithril')
const UserList = require('./views/UserList')
const UserForm = require('./views/UserForm')
const Layout = require('./views/Layout')

m.route(document.body, '/list', {
  '/list': {
    render() {
      return (
        <Layout>
          <UserList />
        </Layout>
      )
    }
  },
  '/edit/:id': {
    render(vnode) {
      return (
        <Layout>
          <UserForm id={vnode.attrs.id} />
        </Layout>
      )
    }
  }
})