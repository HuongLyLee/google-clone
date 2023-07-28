import RenderItem from '../components/RenderItem'

const Footer: React.FC = () => {

      const listItems = [
            {id : 1, value : "About"},
            {id : 2, value : "Advertising"},
            {id : 3, value : "Business"},
            {id : 4, value : "How search works"}
      ]

      return (
            <div className="abosolute bottom-2 w-full bs-neutral-100 relative">
                  <p className="text-sm text-slate-600 absolute -mt-5 top-0 left-0-0" > English </p>

                  <div className="flex justify-center">
                        <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                           {/* <li> About </li>
                           <li> Advertising </li>
                           <li> Business </li>
                           <li> How search works </li> */}
                           
                           {
                              listItems.map((items, index)=>{
                                    return(
                                          <div key={index}>
                                                <RenderItem value={items.value}/>
                                          </div>
                                    )
                              })
                           }

                        </ul>

                        <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                           <li> Privacy </li>
                           <li> Terms </li>
                           <li> Settings </li>
                        </ul>
                  </div>
            </div>
      )
}

export default Footer;




