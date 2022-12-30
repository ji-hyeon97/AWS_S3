package aws.s3.datastore;

import aws.s3.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static{
        USER_PROFILES.add(new UserProfile(UUID.fromString("f551ce72-9d81-40ec-8a1f-4e62e9852bc3"), "SEO",null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("32de887c-d2ac-4348-a660-acbc5d06ddb4"), "JIHYEON",null));
    }

    public List<UserProfile> getUserProfiles(){
        return USER_PROFILES;
    }
}
