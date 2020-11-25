export function validateSearch(search: string): Errors[] {
   try {
      let s: string = search.trim();
      if (s.length == 0) {
         return [Errors.Empty];
      } else {
         //Split by inputs
         return s.split(";").filter((value) => {
            //Get rid of any empty inputs
            return value.trim().length >= 1;

         }).map((value) => {
            let v = value.trim();
            if (v.includes(":")) {
               let splitByColon = v.split(":");

               let type = Types[splitByColon[0]];

               let isTypeValid = type != undefined;
               if (isTypeValid) {
                  let operations = splitByColon[1].split("?");

                  
                  let properties = operations[0].trim().split(",");
                  let queries = operations[1].trim().split(",");
                  //Type: Property 1, Property 2, Property 3 ? Query
                  //Extracting data for objects

                  let block: Block = {
                     type: type,
                     properties: properties,
                     queries: queries
                  }


               } else {
                  return Errors.InvalidType;
               }
            } else {
               return Errors.MissingColon;
            }
         });
      }
   } catch (error) {
      console.log(error);
      console.log("OOOH NICE CATCH")
      return [Errors.Unknown];

   }
}
enum Types {
   Compound = "Compound",
   Element = "Element",
}

interface Block {
   type: Types;
   properties?: any[];
   queries?: any[];
}

enum Errors {
   Empty,
   Unknown,
   MissingColon,
   InvalidType
}


/*OBJECT MODEL =
Type: Property 1, 2, 3 ? Query;
Type Property 1, 2, 3 ? Query;

*/