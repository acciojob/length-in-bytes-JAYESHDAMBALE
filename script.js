const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);
	const inputStringSize = blob.size; 

	return blob.size;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str)); 
