pipeline {
  agent {label 'jenkins-slave-jdk11'}
  stages {
    stage('Push images') {
    //   steps {
    //     script {
    //     withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME' , passwordVariable: 'DOCKER_PASSWORD')]) {
    //       sh """
    //           docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
    //           docker build -t "moatazxz/testj":latest .
    //           docker push "moatazxz/testj":latest
              
    //       """

    //     }
        
    //   }
    //   }
    // }


       stage('export_serivce_acc') {
      steps {
        configFileProvider ([configFile(fileId: 'gcp-service-acc', variable: 'SERVICE_ACC')]) {
        sh """
        export GOOGLE_APPLICATION_CREDENTIALS=$(SERVICE_ACC)
        """
        }
        }
      }
    stage('Use_kube_confing') {
      steps {
        configFileProvider ([configFile(fileId: 'k8s-config', variable: 'KUBE_CONF')]) {
        sh """
           
           kubectl apply -f . --kubeconfig=$KUBE_CONF

        """
        }
        }
      }


   
  



 
  }
  
}

