// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });














// ////////////////////////////////////////////////////////////////////////////////////////
// // 1-ый урок


// import React from 'react';

// import { StyleSheet, View, ScrollView, Text } from 'react-native';

// import EditableTimer from './src/time-tracking/1/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/1/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <ScrollView style={styles.timerList}>
//           <ToggleableTimerForm isOpen={false} />
//           <EditableTimer
//             id="1"
//             title="Mow the lawn"
//             project="House Chores"
//             elapsed="8986300"
//             isRunning
//           />
//           <EditableTimer
//             id="2"
//             title="Bake squash"
//             project="Kitchen Chores"
//             elapsed="3890985"
//             editFormOpen
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });







// ////////////////////////////////////////////////////////////////////////////////////////
// // 2-ый урок

// import React from 'react';
// import uuidv4 from 'uuid/v4';

// import { StyleSheet, View, ScrollView, Text } from 'react-native';

// import EditableTimer from './src/time-tracking/2/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/2/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   state = {
//     timers: [
//       {
//         title: 'Mow the lawn',
//         project: 'House Chores',
//         id: uuidv4(),
//         elapsed: 5456099,
//         isRunning: true,
//       },
//       {
//         title: 'Bake squash',
//         project: 'Kitchen Chores',
//         id: uuidv4(),
//         elapsed: 1273998,
//         isRunning: false,
//       },
//     ],
//   };

//   render() {
//     const { timers } = this.state;

//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <ScrollView style={styles.timerList}>
//           <ToggleableTimerForm />
//           {timers.map(
//             ({ title, project, id, elapsed, isRunning }) => (
//               <EditableTimer
//                 key={id}
//                 id={id}
//                 title={title}
//                 project={project}
//                 elapsed={elapsed}
//                 isRunning={isRunning}
//               />
//             ),
//           )}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });







// ////////////////////////////////////////////////////////////////////////////////////////
// // 3-ый урок


// import React from 'react';
// import uuidv4 from 'uuid/v4';

// import { StyleSheet, View, ScrollView, Text } from 'react-native';

// import { newTimer } from './src/time-tracking/utils/TimerUtils';
// import EditableTimer from './src/time-tracking/3/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/3/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   state = {
//     timers: [
//       {
//         title: 'Mow the lawn',
//         project: 'House Chores',
//         id: uuidv4(),
//         elapsed: 5456099,
//         isRunning: true,
//       },
//       {
//         title: 'Bake squash',
//         project: 'Kitchen Chores',
//         id: uuidv4(),
//         elapsed: 1273998,
//         isRunning: false,
//       },
//     ],
//   };

//   handleCreateFormSubmit = timer => {
//     const { timers } = this.state;

//     this.setState({
//       timers: [newTimer(timer), ...timers],
//     });
//   };

//   render() {
//     const { timers } = this.state;

//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <ScrollView style={styles.timerList}>
//           <ToggleableTimerForm
//             onFormSubmit={this.handleCreateFormSubmit}
//           />
//           {timers.map(
//             ({ title, project, id, elapsed, isRunning }) => (
//               <EditableTimer
//                 key={id}
//                 id={id}
//                 title={title}
//                 project={project}
//                 elapsed={elapsed}
//                 isRunning={isRunning}
//               />
//             ),
//           )}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });




// ////////////////////////////////////////////////////////////////////////////////////////
// // 4-ый урок



// import React from 'react';
// import uuidv4 from 'uuid/v4';

// import { StyleSheet, View, ScrollView, Text } from 'react-native';

// import { newTimer } from './src/time-tracking/utils/TimerUtils';
// import EditableTimer from './src/time-tracking/4/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/4/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   state = {
//     timers: [
//       {
//         title: 'Mow the lawn',
//         project: 'House Chores',
//         id: uuidv4(),
//         elapsed: 5456099,
//         isRunning: true,
//       },
//       {
//         title: 'Bake squash',
//         project: 'Kitchen Chores',
//         id: uuidv4(),
//         elapsed: 1273998,
//         isRunning: false,
//       },
//     ],
//   };

//   handleCreateFormSubmit = timer => {
//     const { timers } = this.state;

//     this.setState({
//       timers: [newTimer(timer), ...timers],
//     });
//   };

//   handleFormSubmit = attrs => {
//     const { timers } = this.state;

//     this.setState({
//       timers: timers.map(timer => {
//         if (timer.id === attrs.id) {
//           const { title, project } = attrs;

//           return {
//             ...timer,
//             title,
//             project,
//           };
//         }

//         return timer;
//       }),
//     });
//   };

//   render() {
//     const { timers } = this.state;

//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <ScrollView style={styles.timerList}>
//           <ToggleableTimerForm
//             onFormSubmit={this.handleCreateFormSubmit}
//           />
//           {timers.map(
//             ({ title, project, id, elapsed, isRunning }) => (
//               <EditableTimer
//                 key={id}
//                 id={id}
//                 title={title}
//                 project={project}
//                 elapsed={elapsed}
//                 isRunning={isRunning}
//                 onFormSubmit={this.handleFormSubmit}
//               />
//             ),
//           )}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });





// ////////////////////////////////////////////////////////////////////////////////////////
// // 5-ый урок

// import React from 'react';
// import uuidv4 from 'uuid/v4';

// import { StyleSheet, View, ScrollView, Text } from 'react-native';

// import { newTimer } from './src/time-tracking/utils/TimerUtils';
// import EditableTimer from './src/time-tracking/5/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/5/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   state = {
//     timers: [
//       {
//         title: 'Mow the lawn',
//         project: 'House Chores',
//         id: uuidv4(),
//         elapsed: 5456099,
//         isRunning: true,
//       },
//       {
//         title: 'Bake squash',
//         project: 'Kitchen Chores',
//         id: uuidv4(),
//         elapsed: 1273998,
//         isRunning: false,
//       },
//     ],
//   };

//   handleCreateFormSubmit = timer => {
//     const { timers } = this.state;

//     this.setState({
//       timers: [newTimer(timer), ...timers],
//     });
//   };

//   handleFormSubmit = attrs => {
//     const { timers } = this.state;

//     this.setState({
//       timers: timers.map(timer => {
//         if (timer.id === attrs.id) {
//           const { title, project } = attrs;

//           return {
//             ...timer,
//             title,
//             project,
//           };
//         }

//         return timer;
//       }),
//     });
//   };

//   handleRemovePress = timerId => {
//     this.setState({
//       timers: this.state.timers.filter(t => t.id !== timerId),
//     });
//   };

//   render() {
//     const { timers } = this.state;

//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <ScrollView style={styles.timerList}>
//           <ToggleableTimerForm
//             onFormSubmit={this.handleCreateFormSubmit}
//           />
//           {timers.map(
//             ({ title, project, id, elapsed, isRunning }) => (
//               <EditableTimer
//                 key={id}
//                 id={id}
//                 title={title}
//                 project={project}
//                 elapsed={elapsed}
//                 isRunning={isRunning}
//                 onFormSubmit={this.handleFormSubmit}
//                 onRemovePress={this.handleRemovePress}
//               />
//             ),
//           )}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });









// ////////////////////////////////////////////////////////////////////////////////////////
// // 6-ый урок

// import React from 'react';
// import uuidv4 from 'uuid/v4';

// import {
//   StyleSheet,
//   View,
//   ScrollView,
//   Text,
//   KeyboardAvoidingView,
// } from 'react-native';

// import { newTimer } from './src/time-tracking/utils/TimerUtils';
// import EditableTimer from './src/time-tracking/6/components/EditableTimer';
// import ToggleableTimerForm from './src/time-tracking/6/components/ToggleableTimerForm';

// export default class App extends React.Component {
//   state = {
//     timers: [
//       {
//         title: 'Mow the lawn',
//         project: 'House Chores',
//         id: uuidv4(),
//         elapsed: 5456099,
//         isRunning: true,
//       },
//       {
//         title: 'Bake squash',
//         project: 'Kitchen Chores',
//         id: uuidv4(),
//         elapsed: 1273998,
//         isRunning: false,
//       },
//     ],
//   };

//   componentDidMount() {
//     const TIME_INTERVAL = 1000;

//     this.intervalId = setInterval(() => {
//       const { timers } = this.state;

//       this.setState({
//         timers: timers.map(timer => {
//           const { elapsed, isRunning } = timer;

//           return {
//             ...timer,
//             elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
//           };
//         }),
//       });
//     }, TIME_INTERVAL);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   handleCreateFormSubmit = timer => {
//     const { timers } = this.state;

//     this.setState({
//       timers: [newTimer(timer), ...timers],
//     });
//   };

//   handleFormSubmit = attrs => {
//     const { timers } = this.state;

//     this.setState({
//       timers: timers.map(timer => {
//         if (timer.id === attrs.id) {
//           const { title, project } = attrs;

//           return {
//             ...timer,
//             title,
//             project,
//           };
//         }

//         return timer;
//       }),
//     });
//   };

//   handleRemovePress = timerId => {
//     this.setState({
//       timers: this.state.timers.filter(t => t.id !== timerId),
//     });
//   };

//   toggleTimer = timerId => {
//     this.setState(prevState => {
//       const { timers } = prevState;

//       return {
//         timers: timers.map(timer => {
//           const { id, isRunning } = timer;

//           if (id === timerId) {
//             return {
//               ...timer,
//               isRunning: !isRunning,
//             };
//           }

//           return timer;
//         }),
//       };
//     });
//   };

//   render() {
//     const { timers } = this.state;

//     return (
//       <View style={styles.appContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Timers</Text>
//         </View>
//         <KeyboardAvoidingView
//           behavior="padding"
//           style={styles.timerListContainer}
//         >
//           <ScrollView contentContainerStyle={styles.timerList}>
//             <ToggleableTimerForm
//               onFormSubmit={this.handleCreateFormSubmit}
//             />
//             {timers.map(
//               ({ title, project, id, elapsed, isRunning }) => (
//                 <EditableTimer
//                   key={id}
//                   id={id}
//                   title={title}
//                   project={project}
//                   elapsed={elapsed}
//                   isRunning={isRunning}
//                   onFormSubmit={this.handleFormSubmit}
//                   onRemovePress={this.handleRemovePress}
//                   onStartPress={this.toggleTimer}
//                   onStopPress={this.toggleTimer}
//                 />
//               ),
//             )}
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   titleContainer: {
//     paddingTop: 35,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D6D7DA',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   timerListContainer: {
//     flex: 1,
//   },
//   timerList: {
//     paddingBottom: 15,
//   },
// });












////////////////////////////////////////////////////////////////////////////////////////
// итого

import React from 'react';
import uuidv4 from 'uuid/v4';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

import { newTimer } from './src/time-tracking/utils/TimerUtils';
import EditableTimer from './src/time-tracking/components/EditableTimer';
import ToggleableTimerForm from './src/time-tracking/components/ToggleableTimerForm';

export default class App extends React.Component {
  state = {
    timers: [
      {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: uuidv4(),
        elapsed: 5460494,
        isRunning: false,
      },
      {
        title: 'Clear paper jam',
        project: 'Office Chores',
        id: uuidv4(),
        elapsed: 1277537,
        isRunning: false,
      },
      {
        title: 'Ponder origins of universe',
        project: 'Life Chores',
        id: uuidv4(),
        elapsed: 120000,
        isRunning: true,
      },
    ],
  };

  componentDidMount() {
    const TIME_INTERVAL = 1000;

    this.intervalId = setInterval(() => {
      const { timers } = this.state;

      this.setState({
        timers: timers.map(timer => {
          const { elapsed, isRunning } = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      });
    }, TIME_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleCreateFormSubmit = timer => {
    const { timers } = this.state;

    this.setState({
      timers: [newTimer(timer), ...timers],
    });
  };

  handleFormSubmit = attrs => {
    const { timers } = this.state;

    this.setState({
      timers: timers.map(timer => {
        if (timer.id === attrs.id) {
          const { title, project } = attrs;

          return {
            ...timer,
            title,
            project,
          };
        }

        return timer;
      }),
    });
  };

  handleRemovePress = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  toggleTimer = timerId => {
    this.setState(prevState => {
      const { timers } = prevState;

      return {
        timers: timers.map(timer => {
          const { id, isRunning } = timer;

          if (id === timerId) {
            return {
              ...timer,
              isRunning: !isRunning,
            };
          }

          return timer;
        }),
      };
    });
  };

  render() {
    const { timers } = this.state;

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.timerListContainer}
        >
          <ScrollView contentContainerStyle={styles.timerList}>
            <ToggleableTimerForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
            {timers.map(
              ({ title, project, id, elapsed, isRunning }) => (
                <EditableTimer
                  key={id}
                  id={id}
                  title={title}
                  project={project}
                  elapsed={elapsed}
                  isRunning={isRunning}
                  onFormSubmit={this.handleFormSubmit}
                  onRemovePress={this.handleRemovePress}
                  onStartPress={this.toggleTimer}
                  onStopPress={this.toggleTimer}
                />
              ),
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerListContainer: {
    flex: 1,
  },
  timerList: {
    paddingBottom: 15,
  },
});
