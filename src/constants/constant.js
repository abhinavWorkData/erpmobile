/* eslint-disable radix */
export const constants = {
  apiURL: 'https://erm.inteldata.org/api',
  attachmentURL: 'https://erm.inteldata.org',
  projectModuleApi: {
    allTask: '/project/allTask',
    taskDetails: '/project/task/ ',
    taskDetailsSuffix: '/show',
  },
  componentType: {
    table: 'table',
    filter: 'filter',
  },
  selectType: {
    description: 'Description',
    status: 'Status',
    priority: 'Priority',
    files: 'Files',
  },
  actionType: {
    View: 'View',
    Edit: 'Edit',
    Delete: 'Delete',
    Reply: 'Reply',
  },
  priority: {
    high: 'high',
    medium: 'medium',
    low: 'low',
  },
  status: {
    todo: 'To Do',
    progress: 'Progress',
    bug: 'Bug',
    done: 'Done',
  },
};

export const longText =
  'Sign up free to digitally transform your enterprises operation into integrated ERM, it automate your operation with 360 dashboard to view HR, Assets, Services, Workforce, Project and Task Management.';

export const convertClassNameIntoNative = className => {
  if (className) {
    if (className.includes('gradient')) {
      if (className === 'bg-gradient-info') {
        return '#0dcaf0';
      } else if (className === 'bg-gradient-primary') {
        return '#0d6efd';
      } else if (className === 'bg-gradient-danger') {
        return '#dc3545';
      } else if (className === 'bg-gradient-green') {
        return '#198754';
      } else if (className === 'bg-gradient-orange') {
        return '#fd7e14';
      } else {
        return 'yellow';
      }
    } else {
      let camelCase = className
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return parseInt(index) === 0
            ? word.toLowerCase()
            : word.toUpperCase();
        })
        .replace(/\s+/g, '');
      return camelCase.replace(/-/g, '');
    }
  }
};

export const getIconName = name => {
  if (name.includes('Estimation')) {
    return {
      iconName: 'bar-graph',
      fontFamily: 'Entypo',
      color: '#1184EF',
      backgroundColor: '#1184EF',
    };
  } else if (name.includes('Invoice')) {
    return {
      iconName: 'book',
      fontFamily: 'AntDesign',
      color: '#1184EF',
      backgroundColor: '#7267E4',
    };
  } else if (name.includes('Project')) {
    return {
      iconName: 'laptop',
      fontFamily: 'AntDesign',
      color: '#198754',
      backgroundColor: '#198754',
    };
  } else if (name.includes('Deal')) {
    return {
      iconName: 'thumbs-up',
      fontFamily: 'Entypo',
      color: '#FB8840',
      backgroundColor: '#FB8840',
    };
  } else if (name.includes('Due')) {
    return {
      iconName: 'thumbs-up',
      fontFamily: 'Entypo',
      color: '#FB8840',
      backgroundColor: '#FB8840',
    };
  } else {
    return {
      iconName: 'bar-graph',
      fontFamily: 'Entypo',
      color: '#1184EF',
      backgroundColor: '#7267E4',
    };
  }
};

export const tabInfo = [
  {
    title: 'Personal Info',
    id: 0,
  },
  {
    title: 'Company Info',
    id: 1,
  },
  {
    title: 'Change Password',
    id: 2,
  },
];

export const projectTabInfo = [
  {
    title: 'Checklist',
    id: 0,
  },
  {
    title: 'Comments',
    id: 1,
  },
  {
    title: 'Files',
    id: 2,
  },
];

export const screenName = {
  LOGIN: 'Login',
  WEBVIEW: 'Webview',
  DASHBOARD: 'Dashboard',
  MY_PROFILE: 'My Profile',
  CONTRACT: 'Contract',
  SUPPORT: 'Support',
  NOTES: 'Notes',
  NOTICE_BOARD: 'Notice Board',
  ATTACHMENT: 'Attachment',
  INVOICE: 'Invoice',
  INVOICE_DETAIL: 'Invoice Detail',
  PAYMENT: 'Payment',
  CREDIT_NOTES: 'Credit Notes',
  ALL_TASK: 'Project',
  TASK_DETAIL: 'Project Details',
};
