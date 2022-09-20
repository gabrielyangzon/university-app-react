import React from 'react'
import { IgrDataGridModule, IgrDataGridToolbar, IgrNumericColumn, IgrTextColumn, IgrDataGrid} from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();


 interface IProps  {
    data : any
    length: string
 }

const Grid = ({data ,length} : IProps) =>{

        
        return   (<div style={{height: "60vh"}}>
                     <IgrDataGridToolbar
                     
                        toolbarTitle={"University count: "+ length}
                        // columnChooser="true"
                        // columnPinning="true"
                     />
                    <IgrDataGrid
                        height="100%"
                        width="100%"
                        dataSource={data}
                        autoGenerateColumns="false"
                        defaultColumnMinWidth="100"
                        summaryScope="Root"
                        isColumnOptionsEnabled="true"
                        isGroupCollapsable="true"
                        groupSummaryDisplayMode="RowBottom"
                        columnMovingMode="Deferred"
                        columnMovingAnimationMode="SlideOver"
                        columnMovingSeparatorWidth="2"
                        columnShowingAnimationMode="slideFromRightAndFadeIn"
                        columnHidingAnimationMode="slideToRightAndFadeOut"
                        selectionMode="SingleRow"
                        cornerRadiusTopLeft="0"
                        cornerRadiusTopRight="0"
                        isPagerVisible="true"
                        pageSize={20}
                         >
                         <IgrTextColumn field='name' headerText='Name'/>
                         <IgrTextColumn field='web_pages' headerText='Website'/>
                    </IgrDataGrid>
                </div>
              )
}



export default Grid


