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

          stage('export_serivce_acc') {
            steps {
              script {
              withCredentials([file(credentialsId: 'gke_auth', variable: 'SERVICE_ACC'),
               file(credentialsId: 'gke_conf', variable: 'KUBE_CONF')]) {
                sh """
                export GOOGLE_APPLICATION_CREDENTIALS=$SERVICE_ACC
                export KUBECONFIG=$KUBE_CONF
                kubectl get po
                """
              }
              
            }
            }
          }
  }

}