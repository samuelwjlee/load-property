const mockProperties = [
  {
    listingInfo: {
      status: 'For Sale',
      price: 950000,
      priceUnit: '$',
      imageUrl:
        'https://images-15.housecanary.com/8d5f/c2/60da98bf71f77f2c512cf5d8.jpg',
    },
    address: {
      streetAddress: '601 4th St.',
      unit: 'APT #2',
      city: 'San Francisco',
      state: 'CA',
      zipcode: '94110',
    },
    livingSpace: {
      bedrooms: {
        count: 1,
      },
      bathrooms: {
        count: 1,
      },
    },
    site: {
      area: 1123,
      areaUnit: 'Sq Ft',
    },
  },
]
type MockProperties = typeof mockProperties

function wrapPromise(promise: Promise<MockProperties>) {
  let status = 'pending'
  let result: MockProperties
  let suspender = promise.then((r) => {
    status = 'success'
    result = r
  })
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'success') {
        return result
      }
    },
  }
}

function fetchProperty(): Promise<MockProperties> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProperties)
    }, 1000)
  })
}

export default function fetchPropertyData() {
  return wrapPromise(fetchProperty())
}
