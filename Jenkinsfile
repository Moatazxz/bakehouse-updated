pipeline {
  agent any
  stages {
    stage('Push images') {
      steps {
        script {
        withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME' , passwordVariable: 'DOCKER_PASSWORD')]) {
          sh """
              docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
              docker build -t "moatazxz/testj":latest .
              docker push "moatazxz/testj":latest
          """

        }
        
      }
      }
    }





      //  stage('export_serivce_acc') {
      // steps {
      //   withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME' , passwordVariable: 'DOCKER_PASSWORD')]) {
      //   sh """
      //   export GOOGLE_APPLICATION_CREDENTIALS=$SERVICE_ACC
      //   """
      //   }
      //   }
      // }
    // stage('Use_kube_confing') {
    //   steps {
    //     configFileProvider ([configFile(fileId: 'k8s-config', variable: 'KUBE_CONF')]) {
    //     sh """
    //        cat $KUBE_CONF > /home/jenkins/.kube/config
    //        cat  /home/jenkins/.kube/config
    //        kubectl get pod  --kubeconfig=$KUBE_CONF
              
    //     """
    //     }
    //     }
    //   }


   
  



 
  }
  
}

