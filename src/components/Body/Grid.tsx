import React from 'react'
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();


 interface IProps  {
    data : any
 }

const Grid = ({data} : IProps) =>{

        return   <div className='container'> 
                    <IgrDataGrid
                        height="50%"
                        width="100%"
                        dataSource={data}
                        autoGenerateColumns="true"
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
                />
    
                </div>
}


export default Grid


