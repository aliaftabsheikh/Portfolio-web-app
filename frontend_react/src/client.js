import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId : 'f4nuz7dt',
    dataset : 'production',
    apiVersion : '2022-02-01',
    useCdn : true,
    token : 'sk44R1PJmyGZxXCZZmC2TBRIZgRqNk9dUED6Wxet8YNrJ5M4g7CAFdLInjOiHR6OJAvyngvyjPEFOeP8U4yC32vCCht9DtXjF5Fhyj3myZp77Dx8i9JHdBqLgHKKi2hAITnh519diMNRwiLMYJidQTGF1kO8nl6gNmUs79srk7VPwZwLo6Hf',
}); 


const builder = imageUrlBuilder(client); 

export const urlFor = (source) => builder.image(source)