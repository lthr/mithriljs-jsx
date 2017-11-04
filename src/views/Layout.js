const m = require('mithril')

module.exports = {
  view(vnode) {
    return (
      <main className="layout">
        <nav className="menu">
          <a href="/list"
            oncreate={m.route.link}>Users</a>
        </nav>
        <section>
          {vnode.children}
        </section>
      </main>
    )
  }
}