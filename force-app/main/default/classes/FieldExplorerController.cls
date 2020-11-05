global with sharing class FieldExplorerController {
    public FieldExplorerController() {

    }
    
    @Auraenabled(cacheable=true)
    public static List<string> getObjects()
    {
        List<string> sObjectList = new List<string>();
        
        for(Schema.SObjectType objTyp : Schema.getGlobalDescribe().Values()){
            String name = objTyp.getDescribe().getName();
            if((!name.containsignorecase('history') && !name.containsignorecase('tag')&&
                !name.containsignorecase('share') && !name.containsignorecase('feed')) || 
               name.toLowerCase().right(3) ==  '__c'){      
                   sObjectList.add(name);
               }
        }
        system.debug('size:'+sObjectList.size());
        return sObjectList;
    }
   
    @Auraenabled
    public static List<FieldWrap> getFields(string objectName)
    {
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe(); 
        Schema.SObjectType ctype = gd.get(objectName); 
        Map<String, Schema.SobjectField> fmap = ctype.getDescribe().fields.getMap();   
        List<FieldWrap> strList = new List<FieldWrap>();
        for(String fieldName: fmap.keySet()) {
            FieldWrap wmp = new FieldWrap();
            wmp.name = fieldName;
            wmp.label = fmap.get(fieldName).getDescribe().getLabel();        
            strList.add(wmp);
        }
        return strList;
    }
    
    public class FieldWrap
    {
        @Auraenabled
        public string Name{get;set;}
        @Auraenabled
        public string Label{get;set;}
    }

    @Auraenabled
   
    public static String fieldType(String fieldName, string objectName)
    {
        try
        {
            Schema.DisplayType fieldType = Schema.getGlobalDescribe().get(objectName).getDescribe().fields.getMap().get(fieldName).getDescribe().getType();
            
            return String.valueOf(fieldType);    
        }
        catch (Exception e)
        {
            return e.getMessage();
        }
        
    }

   

    
        @AuraEnabled
        public static List < String > getselectOptions(sObject objectName, string fld) {
         system.debug('objObject --->' + objectName);
         system.debug('fld --->' + fld);
         List < String > allOpts = new list < String > ();
         // Get the object type of the SObject.
         Schema.sObjectType objType = objectName.getSObjectType();
        
         // Describe the SObject using its object type.
         Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        
         // Get a map of fields for the SObject
         map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();
        
         // Get the list of picklist values for this field.
         list < Schema.PicklistEntry > values =
          fieldMap.get(fld).getDescribe().getPickListValues();
        
         // Add these values to the selectoption list.
         for (Schema.PicklistEntry a: values) {
          allOpts.add(a.getValue());
         }
         system.debug('allOpts ---->' + allOpts);
         allOpts.sort();
         return allOpts;
        }
        @AuraEnabled
        public static List < SObject > fetchValue(string objectName, string data_values){
            System.debug('value1 is '+data_values );
            System.debug('value2 is '+objectName );    
        String query1='SELECT name,id FROM '+objectName+ ' where ' +data_values;
        System.debug(query1);
        List<sObject> obj1=Database.query(query1);
        system.debug('values ' +obj1);
        return obj1;

       }
    
    
    
}
