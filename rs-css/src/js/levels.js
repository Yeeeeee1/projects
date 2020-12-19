var levels = [
  {
    width: "399px",
    table: `
    <plate class="strobe" style="width: 100px;"></plate>
    <plate class="strobe" style="width: 100px;"></plate>
    `,
    win: "plate",
    helpTitle : "Select elements by their type",
    doThis : "Select the plates",
    help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    boardMarkup: `
    <plate>
    <plate/>
    `
  },
  {
    width: "399px",
    table: `
    <bento class="strobe" style="width: 100px;"></bento>
    <plate class="" style="width: 100px;"></plate>
    <bento class="strobe" style="width: 100px;"></bento>
    `,
    win: "bento",
    doThis : "Select the bento boxes",
    helpTitle : "Select elements by their type",
    help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    width: "399px",
    table: `
    <plate id="fancy" class="strobe" style="width: 100px;"></plate>
    <plate class="" style="width: 100px;"></plate>
    <bento class="" style="width: 100px;"></bento>
    `,
    win: "#fancy",
    doThis : "Select the fancy plate",
    helpTitle: "Select elements with an ID",
    help : 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    width: "399px",
    table: `
    <bento class="" style="width: 100px;"></bento>
    <plate class="" style="width: 100px;">
      <apple class="strobe" style="width: 60px;"></apple>
    </plate>
    <apple class="" style="width: 60px;"></apple>
    `,
    win: "plate apple",
    helpTitle: "Select an element inside another element",
    doThis : "Select the apple on the plate",
    help : "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    width: "399px",
    table: `
    <bento class="" style="width: 100px;">
    <orange class="" style="width: 60px;"></orange>
    </bento>
    <plate id="fancy" class="" style="width: 100px;">
      <pickle class="strobe" style="width: 25px;"></pickle>
    </plate>
    <plate class="" style="width: 100px;">
      <pickle class="" style="width: 25px;"></pickle>
    </plate>
    `,
    win: "#fancy pickle",
    doThis : "Select the pickle on the fancy plate",
    helpTitle: "Combine the Descendant & ID Selectors",
    help : 'You can combine any selector with the descendent selector.',
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    width: "399px",
    table: `
    <apple class="" style="width: 60px;"></apple>
    <apple class="small strobe" style="width: 30px;"></apple>
    <plate class="" style="width: 100px;">
      <apple class="small strobe" style="width: 30px;"></apple>
    </plate>
    <plate class="" style="width: 100px;"></plate>
    `,
    win: ".small",
    doThis : "Select the small apples",
    helpTitle: "Select elements by their class",
    help : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    width: "550px",
    table: `
    <apple class="" style="width: 60px;"></apple>
    <apple class="small" style="width: 30px;"></apple>
    <bento class="" style="width: 100px;">
      <orange class="small strobe" style="width: 30px;"></orange>
    </bento>
    <plate class="" style="width: 100px;">
      <orange class="" style="width: 60px;"></orange>
    </plate>
    <plate class="" style="width: 100px;">
      <orange class="small strobe" style="width: 30px;"></orange>
    </plate>
    `,
    win: "orange.small",
    doThis : "Select the small oranges",
    helpTitle: "Combine the Class Selector",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    width: "600px",
    table: `
    <bento class="" style="width: 100px;">
      <orange class="" style="width: 60px;"></orange>
    </bento>
    <orange class="small" style="width: 30px;"></orange>
    <bento class="" style="width: 100px;">
      <orange class="small strobe" style="width: 30px;"></orange>
    </bento>
    <bento class="" style="width: 100px;">
      <apple class="small" style="width: 30px;"></apple>
    </bento>
    <bento class="" style="width: 100px;">
      <orange class="small strobe" style="width: 30px;"></orange>
    </bento>
    `,
    win: "bento orange.small",
    doThis : "Select the small oranges in the bentos",
    helpTitle: "You can do it...",
    help : 'Combine what you learned in the last few levels to solve this one!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    width: "600px",
    table: `
    <pickle class="small" style="width: 18px;"></pickle>
    <pickle class="" style="width: 25px;"></pickle>
    <plate class="strobe" style="width: 100px;">
      <pickle class="" style="width: 25px;"></pickle>
    </plate>
    <bento class="strobe" style="width: 100px;">
      <pickle class="" style="width: 25px;"></pickle>
    </bento>
    <plate class="strobe" style="width: 100px;">
      <pickle class="" style="width: 25px;"></pickle>
    </plate>
    <pickle class="" style="width: 25px;"></pickle>
    <pickle class="small" style="width: 18px;"></pickle>
    `,
    win: "plate, bento",
    doThis : "Select all the plates and bentos",
    helpTitle: "Combine, selectors, with... commas!",
    help : 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    width: "600px",
    table: `
    <apple class="strobe" style="width: 60px;"></apple>
    <plate class="strobe" style="width: 100px;">
      <orange class="small strobe" style="width: 30px;"></orange>
    </plate>
    <bento class="strobe" style="width: 100px;"></bento>
    <bento class="strobe" style="width: 100px;">
      <orange class="strobe" style="width: 60px;"></orange>
    </bento>
    <plate id="fancy" class="strobe" style="width: 100px;"></plate>
    `,
    win: "*",
    doThis : "Select all the things!",
    helpTitle: "You can select everything!",
    help : 'You can select all elements with the universal selector! ',
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  }
]

module.exports = levels;