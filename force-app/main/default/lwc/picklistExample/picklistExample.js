import { LightningElement, wire,track } from 'lwc';
import getObjects from '@salesforce/apex/FieldExplorerController.getObjects';
import getFields from '@salesforce/apex/FieldExplorerController.getFields';

export default class PicklistExample extends LightningElement {
    @track objects = [];
    @track fields = [];
    @track values=[];
    @track multiSelectedValues=[];
    @track valueShow=false;
    @track valueCombo=true;
    @track filterShow=false;

    @wire(getObjects)
    wiredMethod({ error, data }) 
    {
        this. valueCombo=true;
        if (data) 
        {
            this.dataArray = data;
            let tempArray = [];
            this.dataArray.forEach(function (element) 
            {
                var option=
                {
                    label:element,
                    value:element
                };
                tempArray.push(option);
            });
            
            this.objects=tempArray;
            
        } 
        else if (error) 
        {
            this.error = error;
        }
        this. valueCombo=false;
       
    } 
    
    handleObjectChange(event)
    {   
        this.valueShow=true;
        const selectedOption = event.detail.value;
         
        getFields({ objectName: selectedOption})
        .then(result => {
             
            this.dataArray = result;
            console.log(result);
            this.values=result;
            
            let tempArray = [];
            this.dataArray.forEach(function (element) 
            {
                var option=
                {
                    label:element.Label,
                    value:element.Name
                };
                tempArray.push(option);
               
                
            });
            this.values=tempArray;
            console.log(values);
        })
        .catch(error => {
            this.error = error;
        });

    }
    handleFieldChange(event){
          this.multiSelectedValues=event.detail.value;
    }
    handlePrevious(event){
         this. valueCombo=true;

    }
    handlenext(event){
        this. filterShow=true;

   }

   value = 'Equal';
   get options() {
    return [
        { label: 'Equal', value: 'Equal' },
        { label: 'Not Equal', value: 'Not Equal' },
        { label: 'Less Than', value: 'Less Than' },
        { label: 'Greater Than', value: 'Greater Than' },
        { label: 'Less Than OR Equal', value: 'Less Than OR Equal' },
        { label: 'Date', value: 'Date' },
        { label: 'DateTime', value: 'DateTime' }

    ];
}
handleOperatorChange(event) {
    this.value = event.detail.value;
}
}