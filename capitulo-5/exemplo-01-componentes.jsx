function ComponentA() {
  const user = { name: "João", id: 1 }
  const company = { name: "Tech Corp", id: 101 }

  return <ComponentB user={user} company={company} />
}

function ComponentB({ user, company }) {
  return <ComponentC user={user} company={company} />
}

function ComponentC({ user, company }) {
  return <ComponentD user={user} company={company} />
}

function ComponentD({ user, company }) {
  return <ComponentE user={user} company={company} />
}

function ComponentE({ user, company }) {
  return (
    <div>
      <h1>User: {user.name}</h1>
      <h2>Company: {company.name}</h2>
    </div>
  )
}