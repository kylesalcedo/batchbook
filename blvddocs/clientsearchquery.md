query Clients {
  clients(first: 1, query: "email=CLIENT_EMAIL") {
    edges {
      node {
        id
        email
        name
        mobilePhone
        active
        externalId
        createdAt
        updatedAt
      }
    }
  }
}