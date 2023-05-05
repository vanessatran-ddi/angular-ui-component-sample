# Angular product template

To help get teams up and running sooner, this product template to DDD product teams to showcase the ui-components and provide a starting point for teams building DDD products.

### Usage
To use the templates, follow these steps:

1. Click the green **Use this template** button
2. Select **Create a new repository**
3. Select an owner and give the repo a suitable name for your project
4. Select either Public or Private
5. Click the button **Create repository from template**
6. Clone the repo onto your machine
7. Using a terminal of some kind, go into the directory you created and run the following commands (in order):
   1. `npm i`
   2. `npm run build`
   3. `npm run start`
8. Go to the listed port number of your localhost

---

[Visit Design System](https://ui-components.alberta.ca)


Good morning,
1. ``uploads: Upload[] = []``, Upload type is an interface customized according to the project needs. In this example, we define it as:
```
interface Uploader {
  upload: (url: string | ArrayBuffer) => void;
  abort: () => void;
}
interface Upload {
  file: File;
  uploader: Uploader; 
}
```
which `file` here that gets the File(https://www.w3.org/TR/FileAPI/) instance and `uploader` can be like the example code, a `FileReader`.
Since it is our customized interface, we want to let developers decide what they want to define their `uploads` array. It could be simple as the example below:
```
export class FileUploadComponent {
  files: File[] = [];
  
  uploadFile(e: any) {
    const {file} = e.detail;
    if (this.files.some(existingFile => existingFile.name === file.name)) {
       return;
    }
}
```

2. ``MockUploader`` here is class that we define to illustrate the example:
```
export class MockUploader implements Uploader {
  public onprogress: (percent: number) => void = (_: number) => {};
  public onabort: () => void = () => {};
  public onfail: (err: string) => void = (_: string) => {};
  public oncomplete: () => void = () => {};
  
  // The most important implementation methods are below:
  upload(url: string|ArrayBuffer) {
     // Your implementation here: example connecting with the server
  }
  
  abort() {
      // Your implementation here: example aborting the connection with the server
  }
}
```
It is not a must that you have Uploader class like above, that's why we don't export our interfaces. It can be like the below example:
```
export class FileUploadComponent {
  files: File[] = [];
  
  uploadFile(e: any) {
    const {file} = e.detail;
    if (this.files.some(existingFile => existingFile.name === file.name)) {
       return;
    }
    
    setTimeout(() => {
      this.files.push(file);
    }, 1000);
}
```
provided that you do some implementation successfully with the file, simply push that file to `files(or uploads)[]` so it will be reflected on the UI. 

