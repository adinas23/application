function User(name) {
  this.id= generateId();
  this.name=name;
}

function Issue(type,name,sprintId,userId,description,status,tasks,commentId,updateAt,createdAt){
  this.id= generateId();
  this.type=type;
  this.name=name;
  this.sprint=sprintId;
  this.createdBy=userId;
  this.assignee=userId;
  this.description=description;
  this.status=status;
  this.tasks=tasks;
  this.comments = commentId;
  this.updateAt=updateAt;
  this.createdAt=createdAt;

}


function Project(sprint) {
  this.id= generateId();
  this.sprint=sprint;
}

function Sprint(name) {
  this.id= generateId();
  this.name = name;
}

function Comments(name) {
  this.id= generateId();
  this.name=name;
}

function Status(id,name) {
  this.id=id;
  this.name=name;
}

function generateId() {
  var number =new Date().getTime();
  return number;
}

var newStatus = new Status(1,'New');
var inProgressStatus = new Status(2,'In progress');
var feedbackStatus = new Status(3,'Feedback');
var reworkStatus = new Status(4,'Rework');
var resolvedStatus = new Status(5,'Resolved');

var newSprint = new Sprint('ana');
var newUser = new User('mark');


var listIssue = [];
var listSprint =[];
function addIssue(event) {
    event.preventDefault();
    var type=document.getElementById('type').value;
    var name=document.getElementById('name').value;
    var sprint=document.getElementById('sprint').value;
    var description=document.getElementById('description').value;
    var tasks=document.getElementById('tasks').value;
    var comment=document.getElementById('comment').value;
    var update=new Date().toLocaleString();
    var create=new Date().toLocaleString();
    if (type ==="tasks") {
      alert("You don't have to complete the field tasks");
    }
    newIssue = new Issue(type,name,sprint,newUser.id,newUser.id,description,newStatus.id,tasks,comment,update,create);
    listIssue.push(newIssue);
    alert(newIssue.id+" "+newIssue.type+" "+newIssue.name+" "+newIssue.sprint+" "+newIssue.createdBy+" "+newIssue.assignee+" "+newIssue.description+" "+newIssue.status+" "+newIssue.tasks+" "+newIssue.updateAt);
    return listIssue;
}

function addSprint(event) {
  event.preventDefault();
  var name=document.getElementById('addSprint').value;
  newSprint = new Sprint(name);
  listSprint.push(newSprint);
}

function UpdateIssue(event) {
  event.preventDefault();
  var id = document.getElementById('updateId').value;
  var type = document.getElementById('updateType').value;
  var name = document.getElementById('updateName').value;
  var sprint = document.getElementById('updateSprint').value;
  var assignee = document.getElementById('updateAssignee').value;
  var description = document.getElementById('updateDescription').value;
  var tasks = document.getElementById('updateTasks').value;
  var comment = document.getElementById('updateComment').value;
  var update = new Date().toLocaleString();;

  if(id=="" && id==null){
    alert("Please enter the id");
  }else {
    var obj = listIssue.filter(function (obj) {
      return obj.id = id;
    })[0];

    if(obj==null) {
      alert("The issue doesn't exists");
    } else {
      obj.updateAt=update;
      if(type!="" && type !=null) {
        obj.type = type;
      }

      if(name!="" && name !=null) {
        obj.name = name;
      }

      if(sprint!="" && sprint !=null) {
        obj.sprint = sprint;
      }

      if(assignee!="" && assignee !=null) {
        obj.assignee = assignee;
      }

      if(description!="" && description !=null) {
        obj.description = description;
      }

      if(tasks!="" && tasks !=null) {
        obj.tasks = tasks;
      }

      if(comment!="" && comment !=null) {
        obj.comment = comment;
      }

    }
  }

}

function filterSprint(event) {
  event.preventDefault();
  var value = document.getElementById('searchSprint').value;
  var filteredSprint = [];
  for (var i = 0; i < listSprint.length; i++) {
      if (listSprint[i].sprint == value) {
          filtered.push(listSprint[i]);
      }
  }
}

function filterStatus(event) {
  event.preventDefault();
  var value = document.getElementById('searchStatus').value;
  var filteredStatus = [];
  for (var i = 0; i < listIssue.length; i++) {
      if (listIssue[i].sprint == value) {
          filtered.push(listIssue[i]);
      }
  }
}

function show(option){
  if(option==1){
          document.getElementById('form-issue').style.display='block';
          document.getElementById('form-sprint').style.display='none';
          document.getElementById('form-update').style.display='none';
          document.getElementById('filter-sprint').style.display='none';
          document.getElementById('filter-status').style.display='none';
      }

      if(option==2){
        document.getElementById('form-issue').style.display='none';
        document.getElementById('form-sprint').style.display='block';
        document.getElementById('form-update').style.display='none';
        document.getElementById('filter-sprint').style.display='none';
        document.getElementById('filter-status').style.display='none';
      }

      if(option==3){
        document.getElementById('form-issue').style.display='none';
        document.getElementById('form-sprint').style.display='none';
        document.getElementById('form-update').style.display='block';
        document.getElementById('filter-sprint').style.display='none';
        document.getElementById('filter-status').style.display='none';
      }

      if(option==4){
        document.getElementById('form-issue').style.display='none';
        document.getElementById('form-sprint').style.display='none';
        document.getElementById('form-update').style.display='none';
        document.getElementById('filter-sprint').style.display='block';
        document.getElementById('filter-status').style.display='none';
      }

      if(option==5){
        document.getElementById('form-issue').style.display='none';
        document.getElementById('form-sprint').style.display='none';
        document.getElementById('form-update').style.display='none';
        document.getElementById('filter-sprint').style.display='none';
        document.getElementById('filter-status').style.display='block';
      }
}

function showIssuesNew() {
  listIssue.filter(function(element) {
    return element.status="New";
  });
}

function showIssuesInProgress() {
  listIssue.filter(function(element) {
    return element.status=="In progress";
  });
}

function showBugs() {
  listIssue.filter(function(element) {
    return element.type=="bug";
  });
}
