// Books for "choose by book"
window.BOOKS = {
  OLD: [
    {key:'gen',name:'Genesis'},{key:'exod',name:'Exodus'},{key:'lev',name:'Leviticus'},{key:'num',name:'Numbers'},
    {key:'deut',name:'Deuteronomy'},{key:'josh',name:'Joshua'},{key:'judg',name:'Judges'},{key:'ruth',name:'Ruth'},
    {key:'1sam',name:'1 Samuel'},{key:'2sam',name:'2 Samuel'},{key:'1kgs',name:'1 Kings'},{key:'2kgs',name:'2 Kings'},
    {key:'1chr',name:'1 Chronicles'},{key:'2chr',name:'2 Chronicles'},{key:'ezra',name:'Ezra'},{key:'neh',name:'Nehemiah'},
    {key:'esth',name:'Esther'},{key:'job',name:'Job'},{key:'ps',name:'Psalms'},{key:'prov',name:'Proverbs'},
    {key:'eccl',name:'Ecclesiastes'},{key:'song',name:'Song of Solomon'},{key:'isa',name:'Isaiah'},{key:'jer',name:'Jeremiah'},
    {key:'lam',name:'Lamentations'},{key:'ezek',name:'Ezekiel'},{key:'dan',name:'Daniel'},{key:'hosea',name:'Hosea'},
    {key:'joel',name:'Joel'},{key:'amos',name:'Amos'},{key:'obad',name:'Obadiah'},{key:'jonah',name:'Jonah'},
    {key:'mic',name:'Micah'},{key:'nah',name:'Nahum'},{key:'hab',name:'Habakkuk'},{key:'zeph',name:'Zephaniah'},
    {key:'hag',name:'Haggai'},{key:'zech',name:'Zechariah'},{key:'mal',name:'Malachi'}
  ],
  NEW: [
    {key:'matt',name:'Matthew'},{key:'mark',name:'Mark'},{key:'luke',name:'Luke'},{key:'john',name:'John'},
    {key:'acts',name:'Acts'},{key:'rom',name:'Romans'},{key:'1cor',name:'1 Corinthians'},{key:'2cor',name:'2 Corinthians'},
    {key:'gal',name:'Galatians'},{key:'eph',name:'Ephesians'},{key:'phil',name:'Philippians'},{key:'col',name:'Colossians'},
    {key:'1th',name:'1 Thessalonians'},{key:'2th',name:'2 Thessalonians'},{key:'1tim',name:'1 Timothy'},{key:'2tim',name:'2 Timothy'},
    {key:'titus',name:'Titus'},{key:'philem',name:'Philemon'},{key:'heb',name:'Hebrews'},{key:'james',name:'James'},
    {key:'1pet',name:'1 Peter'},{key:'2pet',name:'2 Peter'},{key:'1john',name:'1 John'},{key:'2john',name:'2 John'},
    {key:'3john',name:'3 John'},{key:'jude',name:'Jude'},{key:'rev',name:'Revelation'}
  ]
};

// Topics for Categories
window.CATEGORIES = [
  {key:'miracles',name:'Miracles'},
  {key:'parables',name:'Parables'},
  {key:'prophets',name:'Prophets'},
  {key:'teachings',name:'Teachings of Jesus'},
  {key:'missions',name:"Paul's Missions"},
  {key:'law',name:'Law & Covenant'},
  {key:'worship',name:'Worship & Psalms'}
];

// Sample questions (you can expand these)
window.QUESTIONS = {
  old: [
    { id:1, bookKey:'gen', book:'Genesis', category:'creation', difficulty:'easy',
      question:'Who was the first man created by God?', options:['Adam','Noah','Moses','Abraham'], answer:0 },
    { id:2, bookKey:'exod', book:'Exodus', category:'law', difficulty:'easy',
      question:'Who led the Israelites out of Egypt?', options:['Moses','Aaron','Joshua','Caleb'], answer:0 },
    { id:3, bookKey:'dan', book:'Daniel', category:'prophets', difficulty:'moderate',
      question:'Which king threw Daniel into the lions’ den?', options:['Darius','Nebuchadnezzar','Cyrus','Belshazzar'], answer:0 }
  ],
  new: [
    { id:4, bookKey:'john', book:'John', category:'teachings', difficulty:'difficult',
      question:'Which “I am” statement is in John 14:6?', options:[
        'I am the Bread of Life','I am the Light of the World','I am the Way, the Truth, and the Life','I am the True Vine'
      ], answer:2 },
    { id:5, bookKey:'acts', book:'Acts', category:'missions', difficulty:'easy',
      question:'Who was converted on the road to Damascus?', options:['Peter','Paul','John','James'], answer:1 }
  ],
  general: [
    { id:6, bookKey:'gen', book:'Genesis', category:'creation', difficulty:'easy',
      question:'What is the first book of the Bible?', options:['Exodus','Genesis','Leviticus','Numbers'], answer:1 },
    { id:7, bookKey:'rom', book:'Romans', category:'teachings', difficulty:'moderate',
      question:'“The wages of sin is death” appears in which book?', options:['Romans','Ephesians','Hebrews','James'], answer:0 }
  ]
};

/*
Add more like:
{ id:XX, bookKey:'matt', book:'Matthew', category:'miracles', difficulty:'easy',
  question:'Your text?', options:['A','B','C','D'], answer:0 }
*/
