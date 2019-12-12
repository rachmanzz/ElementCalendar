// thema from https://codepen.io/eliza-rjb/pen/xmbEWX
var obj = [
    { 
      node: 'div', className: ['main-container-wrapper'], child: [
        {
            node: 'header', child: [
                {
                    node: 'button', className: ['header__btn header__btn--left'], 
                    attr: [
                        { name: 'title', value: 'Menu' }
                    ],
                    styles: {

                    },
                    child: [
                        { 
                            node: 'svg',
                            attr: [
                                { name: 'class', value: 'icon' },
                                { name: 'width', value: '20px' },
                                { name: 'viewBox', value: '0 0 20 16' },
                                { name: 'fill', value: 'none' },
                                { name: 'xmlns', value: 'http://www.w3.org/2000/svg' }
                            ],
                            child: [
                                { 
                                    node: 'path',
                                    attr: [
                                        { name: 'fill', value: '#fff' },
                                        { name: 'd', value: 'M0 0h20v2H0zM0 7h20v2H0zM0 14h20v2H0z' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    node: 'button', className: ['header__btn header__btn--right'], 
                    attr: [
                        { name: 'title', value: 'Add event' }
                    ],
                    child: [
                        { 
                            node: 'svg', svg: true,
                            attr: [
                                { name: 'class', value: 'icon' },
                                { name: 'width', value: '26px' },
                                { name: 'viewBox', value: '0 0 512 512' },
                                { name: 'xmlns', value: 'http://www.w3.org/2000/svg' }
                            ],
                            html: '<path fill="#fff" d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"/>'
                        }
                    ]
                }   
            ]
        },
        {
            node: 'main', child: [
                {
                    node: 'div', className: ['calendar-container'], child: [
                      {
                        node: 'div', className: ['calendar-container__header'], calItem:'fulldate', child: function (data) {
                          return  [
                              { 
                                node: 'button', className: ['calendar-container__btn calendar-container__btn--left'], title: 'Previous', calButton: true, calItem: "prevAction",
                                child: [{ node: 'i', className: ['icon ion-ios-arrow-back'] }]
                              },
                              {
                                node: 'h2', className: ['calendar-container__title'], html: moment(data).format('MMMM, YYYY')
                              },
                              { 
                                node: 'button', className: ['calendar-container__btn calendar-container__btn--right'], title: 'Next', calButton: true, calItem:"nextAction",
                                child: [{ node: 'i', className: ['icon ion-ios-arrow-forward'] }]
                              }
                            ]
                        }
                      },
                      {
                        node: 'div', className: ['calendar-container__body'], 
                        child: [
                          { 
                            node: 'div', className: ['calendar-table'], 
                            child: [
                              {
                                node: 'div', className: ['calendar-table__header'], 
                                child: [
                                  { 
                                    node: 'div', className: ['calendar-table__row'], 
                                    child: [
                                      { node: 'div', className: ['calendar-table__col'], html: 'S' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'M' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'T' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'W' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'T' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'F' },
                                      { node: 'div', className: ['calendar-table__col'], html: 'S' }
                                    ]
                                  }
                                ]
                              },
                              {
                                node: 'div', className: ['calendar-table__body'], dateItem: true, calItem: 'prerender', 
                                render: function (date, parent, render) {
                                  var col_1 = date.filter(function (itemdate, i) {
                                    return i < 7
                                  })
                                  var col_2 = date.filter(function (itemdate, i) {
                                    return i >= 7 && i < 14
                                  })
                                  var col_3 = date.filter(function (itemdate, i) {
                                    return i >= 14 && i < 21
                                  })
                                  var col_4 = date.filter(function (itemdate, i) {
                                    return i >= 21 && i < 28
                                  })
                                  var col_5 = date.filter(function (itemdate, i) {
                                    return i >= 28 && i < 35
                                  })
                                  var col_6 = date.filter(function (itemdate, i) {
                                    return i >= 35 && i < 42
                                  })
                                  render(parent, [
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_1, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: data.status === 'current' ? ['calendar-table__col'] : ['calendar-table__col', 'calendar-table__inactive'], render: render, 
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_2, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: ['calendar-table__col'], render: render, 
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_3, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: ['calendar-table__col'], render: render, 
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_4, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: ['calendar-table__col'], render: render, onclick: function () {
                                              console.log('helo')
                                            },
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_5, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: data.status === 'current' ? ['calendar-table__col'] : ['calendar-table__col', 'calendar-table__inactive'], render: render, 
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    { 
                                      node: 'div', dateItem: true, calItem: 'render', data: col_6, render: render, className: ['calendar-table__row'],
                                      child: function (data) {
                                        return [
                                          {
                                            node: 'div', className: data.status === 'current' ? ['calendar-table__col'] : ['calendar-table__col', 'calendar-table__inactive'], render: render, 
                                            child: [
                                              { 
                                                node: 'div', 
                                                className: ['calendar-table__item'], 
                                                render: render,
                                                child: [
                                                  { node: 'span', html: '' + data.date }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  ])
                                }
                              }
                            ] 
                          }
                        ]
                      }
                    ]
                }
            ]
        }
      ]
    }
  ]