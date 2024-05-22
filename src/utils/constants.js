const constants = Object.freeze({
  links: [
    { id: 1, url: "/", title: "Home"},
    { id: 2, url: "/about", title: "About"},
    { id: 3, url: "/portfolio", title: "Portfolio"},
    { id: 4, url: "/contact", title: "Contact"},
  ],
  skills: ['JavaScript', 'Node', 'GraphQL', 'SQL', 'Postgres', 'Sequalize', 'knex', 'Express', 'AWS', 'S3', 'EC2', 'React', 'Framer-Motion', 'EmailJS', 'Vue', 'GIT', 'HTML', 'CSS', 'Adaptability', 'Time Management', 'Conflict Resolution', 'Organizational', 'Agile Methodologies'],
  projects: [
    {
      id: 1,
      title: 'Stylist Site',
      desc: 'Portal web to help any stylist to organize their agenda making appointments with their clients',
      url: 'https://github.com/AlbertoMMIP/Color-Destellos',
      img: 'https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Forecast Weather Site',
      desc: 'Shows the forcast of diferents countries with graphs and predictions.',
      url: 'https://github.com/AlbertoMMIP/WeatherAppHooks',
      img: 'https://images.pexels.com/photos/19275547/pexels-photo-19275547/free-photo-of-mar-paisaje-naturaleza-playa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Library Site',
      desc: 'Help to library owners to handle the loans and management the stock of the library.',
      url: 'https://github.com/AlbertoMMIP/library',
      img: 'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Organizer',
      desc: 'Site to assign people to their tables at my weding party.',
      url: 'https://albertommip.github.io/organizer/build/',
      img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Portfolio',
      desc: 'First personal web',
      url: 'https://albertommip.github.io/portfolio/',
      img: 'https://images.pexels.com/photos/2432221/pexels-photo-2432221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ],
  experience: [
    {
      company: 'Intelligential',
      rol: 'Software Engineer',
      from: 'JULY 2020',
      to: 'NOW',
      summary: '* Working in a SaaS project that manages any kind of financial product. * Development features with distributed architecture of micro-services & micro-fronts. * Support to CORE financial. * Third-party application integration. * Fix bugs.',
      url: '',
    },
    {
      company: 'Financiera Independencia',
      rol: 'Front Engineer',
      from: 'MAR 2019',
      to: 'JUN 2020',
      summary: '* Migration of legacy platforms from Java to React & Redux - Enroll of clients to request loans. * APIs’ Integrations. * Analysis of user stories. * Creating mockups. * Working with the UX team. * Applying SAFe methodology. ',
      url: '',
    },
    {
      company: 'FOVISSSTE',
      rol: 'Senior developer',
      from: 'MAR 2015',
      to: 'FEB 2019',
      summary: '* Support to mortgage web platform created with WebForms & C#. * Development futures with monolithic architecture. * Responsable to releasing new versions in production. * Applying code review & pair programming.',
      url: '',
    },
    {
      company: 'INFO100',
      rol: 'Junior developer',
      from: 'AUG 2012',
      to: 'FEB 2015',
      summary: '* Create factoring management desktop applications. * Development features with .NET technologies. * Work with relational databases, create Entity-Relation Diagrams, tables, store procedures, triggers.',
      url: '',
    },
  ],
})

export default constants;